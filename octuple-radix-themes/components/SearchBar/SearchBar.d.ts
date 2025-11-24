import { default as React } from '../../../node_modules/react';
export interface SearchBarProps {
    /**
     * Placeholder text
     * @default 'Search...'
     */
    placeholder?: string;
    /**
     * Value of the search input
     */
    value?: string;
    /**
     * Callback when value changes
     */
    onChange?: (value: string) => void;
    /**
     * Callback when search is submitted
     */
    onSearch?: (value: string) => void;
    /**
     * Size of the search bar
     * @default '2'
     */
    size?: '1' | '2' | '3';
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
    /**
     * Show clear button when there's text
     * @default true
     */
    showClear?: boolean;
    /**
     * Custom styles for the TextField
     */
    style?: React.CSSProperties;
    /**
     * Auto-focus the input when mounted
     */
    autoFocus?: boolean;
}
export declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;
