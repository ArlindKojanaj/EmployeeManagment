export const RESOLVE_ENV = (value: string) => (!`${value}`.startsWith('$')
  &&  `${value}`.split('::').length === 1) ? `${value}` :
  `${value}`.startsWith('$') ? `${value}`.split('::')[1] :
    `${value}`.split('::')[0].length === 0 ? `${value}`.split('::')[1] :
      `${value}`.split('::')[0];