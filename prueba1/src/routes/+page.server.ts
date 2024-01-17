import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    // 1.
    const response = await prisma.cost.findMany()

    // 2.
    return { costs: response };
}) satisfies PageServerLoad;