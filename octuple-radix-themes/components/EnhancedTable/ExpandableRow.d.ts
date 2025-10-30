export interface ExpandableRowProps<T = any> {
    record: T;
    expanded: boolean;
    onExpand: (expanded: boolean, record: T) => void;
    expandable?: boolean;
}
/**
 * Expandable Row Component
 *
 * Renders the expand/collapse button for expandable table rows.
 * Handles the expand state and provides visual feedback.
 */
export declare function ExpandableRow<T = any>({ record, expanded, onExpand, expandable, }: ExpandableRowProps<T>): import("react/jsx-runtime").JSX.Element;
