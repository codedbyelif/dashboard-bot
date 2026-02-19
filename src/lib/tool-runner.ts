export async function runTool(toolName: string, input: string, ctx: any) {
    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
        summary: `Processed by ${toolName || 'default'}: ${input.slice(0, 200)}`,
        full: {
            input,
            toolName,
            ctx,
            processedAt: new Date().toISOString()
        }
    };
}
