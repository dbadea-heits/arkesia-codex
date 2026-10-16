/**
 * Sätteri mdast plugin: tag every task-list item with its source line (`data-line`) so a ticked
 * checkbox on the page can be written back to the right line of the Markdown file.
 */
export default function taskLinesPlugin() {
	return {
		name: 'task-lines',
		options: { position: true },
		listItem(node, ctx) {
			if (typeof node.checked !== 'boolean' || !node.position) return;
			const data = node.data ?? {};
			ctx.setProperty(node, 'data', {
				...data,
				hProperties: { ...data.hProperties, dataLine: node.position.start.line },
			});
		},
	};
}
