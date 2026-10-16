import type { APIRoute, GetStaticPaths } from 'astro';
import { extras, type Extra } from '../../lib/library';

/** The stand-alone HTML cheat sheets are self-contained; serve them as-is. */
export const getStaticPaths = (() => extras.map((extra) => ({ params: { file: extra.file }, props: extra }))) satisfies GetStaticPaths;

export const GET: APIRoute<Extra> = ({ props }) =>
	new Response(props.html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
