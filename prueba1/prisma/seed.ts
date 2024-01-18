import { PrismaClient } from '@prisma/client';
import costsData from '../src/lib/data.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	for (const p of costsData) {
		const cost = await prisma.cost.create({
			data: {
				category: p.category,
				amount: p.amount,
				file: p.file
			}
		});
		console.log(`Created cost with id: ${cost.id}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
