type queryType = 'single' | 'repeat';

interface queryProps {
	client: any,
	type: string,
	queryType: queryType,
	apiParams: {
		uid: string,
		fetchLinks: Array <string>,
	},
}

// declare function getPageProps(props: queryProps): object;

export default async function getPageProps(props: queryProps): Promise<object> {
	const {
		client,
		type,
		queryType = 'single',
		apiParams
	} = props;

	if (client === undefined || client === null) {
		throw new Error('Client Needs to be defined');
	}

	const document = queryType === 'single'
		? await client.getSingle(type ?? apiParams?.uid)
		: await client.getByUID(apiParams?.uid)

	const { data: slices } = document;

	return {
		...document,
		...slices,
	}
}
