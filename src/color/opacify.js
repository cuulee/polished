// @flow
import rgba from './rgba'
import parseToRgb from './parseToRgb'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, '#fff');
 *   background: opacify(0.2, 'hsl(0, 0%, 100%)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, '#fff')};
 *   background: ${opacify(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function opacify(amount: number, color: string) {
  const parsedColor = parseToRgb(color)
  const alpha: number = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1
  const colorWithAlpha = {
    ...parsedColor,
    alpha: guard(0, 1, (alpha + amount)),
  }
  return rgba(colorWithAlpha)
}

export default curry(opacify)
