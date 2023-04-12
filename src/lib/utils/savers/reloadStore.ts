import { createGraph, createNode } from '../creators';
import type { AnchorKey, GraphKey, NodeConfig } from '$lib/types';
import { createAnchor } from '../creators/createAnchor';
import type { Anchor } from '$lib';

export function reloadStore(store: string) {
	const object = JSON.parse(store);
	console.log(object.transforms.scale);
	const graph = createGraph(object.id as GraphKey, {
		...object,
		initialZoom: object.transforms.scale
	});
	console.log(graph);
	Object.entries(object.nodes).forEach(([id, node]) => {
		const nodeConfig: NodeConfig = node;
		console.log('DIMENSIONS', nodeConfig.dimensions);
		const newNode = createNode(nodeConfig);

		Object.entries(node.anchors).forEach(([id, anchor]) => {
			console.log(anchor);
			const newAnchor = createAnchor(
				newNode,
				id as AnchorKey,
				anchor.position,
				{ width: 0, height: 0 },
				anchor.input,
				anchor.direction,
				anchor.dynamic
			);
			newNode.anchors.add(newAnchor, id);
		});
		graph.nodes.add(newNode, id);
	});
	Object.entries(object.edges).forEach(([id, edge]) => {
		graph.edges.add(edge, id);
	});
	return graph;
}
