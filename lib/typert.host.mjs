// src/typert.ts
import { z } from "zod";

// src/remote.ts
var PROBE_IDENTITY = {
  id: "dsh-malko-prefs#malkoModels/probe",
  service: "malkoModels",
  namespace: "malkoModels",
  method: "probe",
  argsTypeSymbol: "dsh-malko-prefs#ProbeArgs",
  resultTypeSymbol: "dsh-malko-prefs#ProbeResult"
};
function probeInvocation(createArgs, createResult) {
  return {
    id: PROBE_IDENTITY.id,
    service: PROBE_IDENTITY.service,
    namespace: PROBE_IDENTITY.namespace,
    method: PROBE_IDENTITY.method,
    invocation: { kind: "direct" },
    parameters: [
      {
        name: "args",
        wire: "args",
        source: "json",
        codec: { mode: "strict", typeSymbol: PROBE_IDENTITY.argsTypeSymbol, create: createArgs }
      }
    ],
    result: { mode: "strict", typeSymbol: PROBE_IDENTITY.resultTypeSymbol, create: createResult }
  };
}

// src/typert.ts
var probeArgsSchema$value;
var probeArgsSchema = () => probeArgsSchema$value ??= z.object({
  baseURL: z.string(),
  apiKeyEnv: z.string().optional()
});
var candidateSchema$value;
var candidateSchema = () => candidateSchema$value ??= z.object({
  id: z.string(),
  name: z.string(),
  contextWindow: z.number().optional(),
  maxTokens: z.number().optional(),
  input: z.array(z.string()).optional()
});
var probeResultSchema$value;
var probeResultSchema = () => probeResultSchema$value ??= z.object({
  models: z.array(candidateSchema())
});
var TYPERT = {
  package: "dsh-malko-prefs",
  face: "host",
  schemas: [],
  invocations: [probeInvocation(probeArgsSchema, probeResultSchema)],
  model: {
    services: [{
      key: "malkoModels",
      exportName: "MalkoModelsRuntime",
      description: "llama.cpp model enrichment for the Models page.",
      tags: [],
      members: [
        { kind: "method", name: "probe", signature: "probe(args: ProbeArgs): Promise<ProbeResult>" }
      ],
      types: []
    }],
    events: [],
    objects: []
  }
};
export {
  TYPERT
};
//# sourceMappingURL=typert.host.mjs.map
