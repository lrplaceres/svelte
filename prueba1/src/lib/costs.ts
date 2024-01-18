import { z } from 'zod';

export const costShema = z.object({
	id: z.number(),
	category: z.string().min(2),
	amount: z.number(),
	date: z.date(),
	file: z.string()
});

type CostDB = z.infer<typeof costShema>[];


export const costs: CostDB = [
	{ id: 1, category: 'Category1', amount: 5, date: new Date(), file: 'file.jpg' },
  { id: 2, category: 'Category2', amount: 5, date: new Date(), file: 'file1.jpg' },
];
