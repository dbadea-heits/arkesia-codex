import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { TASK_TOGGLE_ROUTE } from './routes.mjs';

const NOTE_FILE = /^[\w.-]+\.md$/;
const TASK_LINE = /^(\s*(?:[-*+]|\d+[.)])\s+\[)([ xX])(\])/;

/**
 * Vite dev-server plugin: POST `{ file, line, checked }` flips one `[ ]` / `[x]` in a note.
 * The request names the state it expects to replace, so a stale page cannot overwrite a newer edit.
 * Dev only; the static build has no server and keeps checkboxes read-only.
 */
export default function taskToggleServer({ contentDir }) {
	return {
		name: 'task-toggle-server',
		apply: 'serve',
		configureServer(server) {
			server.middlewares.use(TASK_TOGGLE_ROUTE, async (req, res) => {
				const reply = (status, message) => {
					res.statusCode = status;
					res.end(message);
				};
				if (req.method !== 'POST') return reply(405, 'POST only');

				let body = '';
				for await (const chunk of req) body += chunk;
				const { file, line, checked } = JSON.parse(body || '{}');
				if (!NOTE_FILE.test(file ?? '') || !Number.isInteger(line) || typeof checked !== 'boolean') {
					return reply(400, 'Expected { file, line, checked }');
				}

				const path = join(contentDir, file);
				const lines = (await readFile(path, 'utf8')).split('\n');
				const match = TASK_LINE.exec(lines[line - 1] ?? '');
				if (!match) return reply(409, `Line ${line} of ${file} is not a task`);
				if ((match[2] !== ' ') === checked) return reply(409, `Line ${line} of ${file} is already ${checked ? 'ticked' : 'unticked'}`);

				lines[line - 1] = lines[line - 1].replace(TASK_LINE, `$1${checked ? 'x' : ' '}$3`);
				await writeFile(path, lines.join('\n'));
				reply(204, '');
			});
		},
	};
}
