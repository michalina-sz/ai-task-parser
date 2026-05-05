export type ParsedTask = {
	id: string;
	title: string;
	type: 'task' | 'event' | 'reminder';
	date?: string;
	time?: string;
	priority: 'low' | 'medium' | 'high';
};
