import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
    // 2.
    const cost = await prisma.cost.findUnique({
        where: { id: Number(id) }
    });

    // 3.
    return { cost };
}) satisfies PageServerLoad;