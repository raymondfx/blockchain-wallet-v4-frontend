import { ExtractSuccess } from 'core/types'
import { lift } from 'ramda'
import { RootState } from 'data/rootReducer'
import { selectors } from 'data'

export const getData = (state: RootState) => {
  const veriffUrlR = selectors.components.veriff.getVeriffUrl(state)
  const veriffDomainR = selectors.core.walletOptions.getVeriffDomain(state)

  return lift(
    (
      veriffUrl: ExtractSuccess<typeof veriffUrlR>,
      veriffDomain: ExtractSuccess<typeof veriffDomainR>
    ) => ({
      veriffUrl,
      veriffDomain
    })
  )(veriffUrlR, veriffDomainR)
}
