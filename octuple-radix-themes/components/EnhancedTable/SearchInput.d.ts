export interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}
/**
 * Search Input Component
 *
 * Provides a search input field for filtering table data.
 * Uses Radix TextField with search icon for consistent styling.
 */
export declare function SearchInput({ value, onChange, placeholder, disabled, }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
