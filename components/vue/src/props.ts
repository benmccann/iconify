import type { IconifyIcon } from '@iconify/types';
import type { IconifyIconCustomisations as RawIconifyIconCustomisations } from '@iconify/utils/lib/customisations/defaults';
import { defaultIconCustomisations } from '@iconify/utils/lib/customisations/defaults';

/**
 * Icon render mode
 *
 * 'style' = 'bg' or 'mask', depending on icon content
 * 'bg' = <span> with style using `background`
 * 'mask' = <span> with style using `mask`
 * 'svg' = <svg>
 */
export type IconifyRenderMode = 'style' | 'bg' | 'mask' | 'svg';

/**
 * Icon customisations
 */
export type IconifyIconCustomisations = RawIconifyIconCustomisations & {
	// Allow rotation to be string
	rotate?: string | number;

	// Inline mode
	inline?: boolean;
};

export const defaultExtendedIconCustomisations = {
	...defaultIconCustomisations,
	inline: false,
};

/**
 * Callback for when icon has been loaded (only triggered for icons loaded from API)
 */
export type IconifyIconOnLoad = (name: string) => void;

/**
 * Icon properties
 */
export interface IconifyIconProps extends IconifyIconCustomisations {
	// Icon object
	icon: IconifyIcon | string;

	// Render mode
	mode?: IconifyRenderMode;

	// Style
	color?: string;

	// Shorthand flip
	flip?: string;
}

/**
 * Properties for element that are mentioned in render.ts
 */
interface IconifyElementProps {
	// Unique id, used as base for ids for shapes. Use it to get consistent ids for server side rendering
	id?: string;

	// Style
	style?: unknown;

	// Callback to call when icon data has been loaded. Used only for icons loaded from API
	onLoad?: IconifyIconOnLoad;
}

/**
 * Mix of icon properties and HTMLElement properties
 */
export interface IconProps extends IconifyElementProps, IconifyIconProps {
	/**
	 * Try load icon on first render during SSR
	 */
	ssr?: boolean
}
