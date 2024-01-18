import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const categoryF = String(data.get('category'));
		const amountF = Number(data.get('amount'));
		const dateF = data.get('date');
		const fileF = String(data.get('file'));

		await prisma.cost.create({
			data: {
				category: categoryF,
				amount: amountF,
				date: new Date(Date.parse(dateF)),
				file: fileF
			}
		});   

    throw redirect(303, "/");
	}
} satisfies Actions;
