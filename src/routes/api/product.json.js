import { getPost } from '$lib/utils/getPost';

export async function get() {
	return {
		body: {
			data: getPost()
		}
	};
}
