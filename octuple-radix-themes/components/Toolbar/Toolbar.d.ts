import { default as React } from '../../../node_modules/react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
export interface ToolbarProps {
    children: React.ReactNode;
    /**
     * Orientation of the toolbar
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Whether to loop keyboard navigation
     * @default true
     */
    loop?: boolean;
}
export declare const Toolbar: React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>>;
export declare const ToolbarButton: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarButtonProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const ToolbarSeparator: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const ToolbarLink: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarLinkProps & React.RefAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export declare const ToolbarToggleGroup: React.ForwardRefExoticComponent<(ToolbarPrimitive.ToolbarToggleGroupSingleProps | ToolbarPrimitive.ToolbarToggleGroupMultipleProps) & React.RefAttributes<HTMLDivElement>>;
export declare const ToolbarToggleItem: React.ForwardRefExoticComponent<Omit<ToolbarPrimitive.ToolbarToggleItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
