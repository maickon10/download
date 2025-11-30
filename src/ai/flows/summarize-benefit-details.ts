'use server';

/**
 * @fileOverview A flow that summarizes benefit details from a document.
 *
 * - summarizeBenefitDetails - A function that handles the summarization process.
 * - SummarizeBenefitDetailsInput - The input type for the summarizeBenefitDetails function.
 * - SummarizeBenefitDetailsOutput - The return type for the summarizeBenefitDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeBenefitDetailsInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A document containing details about the user's benefits, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeBenefitDetailsInput = z.infer<typeof SummarizeBenefitDetailsInputSchema>;

const SummarizeBenefitDetailsOutputSchema = z.object({
  summary: z.string().describe('A summary of the key information and potential issues found in the document.'),
});
export type SummarizeBenefitDetailsOutput = z.infer<typeof SummarizeBenefitDetailsOutputSchema>;

export async function summarizeBenefitDetails(
  input: SummarizeBenefitDetailsInput
): Promise<SummarizeBenefitDetailsOutput> {
  return summarizeBenefitDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeBenefitDetailsPrompt',
  input: {schema: SummarizeBenefitDetailsInputSchema},
  output: {schema: SummarizeBenefitDetailsOutputSchema},
  prompt: `You are an expert in analyzing benefit documents for retirees and pensioners.

You will receive a document containing details about the user's benefits. Your task is to summarize the key information and potential issues in a concise and easy-to-understand manner.

Document: {{media url=documentDataUri}}`,
});

const summarizeBenefitDetailsFlow = ai.defineFlow(
  {
    name: 'summarizeBenefitDetailsFlow',
    inputSchema: SummarizeBenefitDetailsInputSchema,
    outputSchema: SummarizeBenefitDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
