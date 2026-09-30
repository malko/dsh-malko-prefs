/**
 * dsh-malko-prefs — Host Typert manifest.
 *
 * Exported through the package's `./typert` entry so `@deepseek-ai/dsh-typert-loader`
 * registers the strict invocation definition when this plugin mounts. Do not
 * add a second, hand-written registration: a duplicate endpoint or id is
 * rejected at runtime.
 */
import { z } from 'zod'
import { probeInvocation } from './remote.ts'

let probeArgsSchema$value
/** Invocation args: the provider endpoint to interrogate. */
const probeArgsSchema = () => (probeArgsSchema$value ??= z.object({
  baseURL: z.string(),
  apiKeyEnv: z.string().optional(),
}))

let candidateSchema$value
/** One enriched candidate. */
const candidateSchema = () => (candidateSchema$value ??= z.object({
  id: z.string(),
  name: z.string(),
  contextWindow: z.number().optional(),
  maxTokens: z.number().optional(),
  input: z.array(z.string()).optional(),
}))

let probeResultSchema$value
/** Probe result. */
const probeResultSchema = () => (probeResultSchema$value ??= z.object({
  models: z.array(candidateSchema()),
}))

/** Host-face manifest contributed by this package. */
export const TYPERT = {
  package: 'dsh-malko-prefs',
  face: 'host',
  schemas: [],
  invocations: [probeInvocation(probeArgsSchema, probeResultSchema)],
  model: {
    services: [{
      key: 'malkoModels',
      exportName: 'MalkoModelsRuntime',
      description: 'llama.cpp model enrichment for the Models page.',
      tags: [],
      members: [
        { kind: 'method', name: 'probe', signature: 'probe(args: ProbeArgs): Promise<ProbeResult>' },
      ],
      types: [],
    }],
    events: [],
    objects: [],
  },
}