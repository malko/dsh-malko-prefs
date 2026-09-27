/**
 * dsh-malko-prefs — shared Remote wire identity.
 *
 * The same invocation is registered on the Host (`typert.register`) and mounted
 * in the browser (`ctx.remote.$mount`), so both halves build it from here. The
 * only difference is the schema factory each side supplies: the Host decodes
 * arguments with zod, while the Client never decodes its own arguments and only
 * needs a factory to satisfy the strict-codec contract.
 */

/** Wire identity shared by the Host manifest and the Client contribution. */
export const PROBE_IDENTITY = {
  id: 'dsh-malko-prefs#malkoModels/probe',
  service: 'malkoModels',
  namespace: 'malkoModels',
  method: 'probe',
  argsTypeSymbol: 'dsh-malko-prefs#ProbeArgs',
  resultTypeSymbol: 'dsh-malko-prefs#ProbeResult',
}

/**
 * Build the `malkoModels/probe(args)` direct invocation.
 * @param {() => { parse: (value: unknown) => unknown }} createArgs schema factory for the single `args` parameter.
 * @param {() => { parse: (value: unknown) => unknown }} createResult schema factory for the result.
 * @returns {object} the invocation descriptor, identical on both faces.
 */
export function probeInvocation(createArgs, createResult) {
  return {
    id: PROBE_IDENTITY.id,
    service: PROBE_IDENTITY.service,
    namespace: PROBE_IDENTITY.namespace,
    method: PROBE_IDENTITY.method,
    invocation: { kind: 'direct' },
    parameters: [
      {
        name: 'args',
        wire: 'args',
        source: 'json',
        codec: { mode: 'strict', typeSymbol: PROBE_IDENTITY.argsTypeSymbol, create: createArgs },
      },
    ],
    result: { mode: 'strict', typeSymbol: PROBE_IDENTITY.resultTypeSymbol, create: createResult },
  }
}