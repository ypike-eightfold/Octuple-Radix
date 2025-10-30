import { Flex, Spinner, Text } from '@radix-ui/themes';

export interface LoadingOverlayProps {
  message?: string;
}

/**
 * Loading Overlay Component
 * 
 * Displays a loading spinner with optional message over the table content.
 * Uses Radix Spinner for consistent styling.
 */
export function LoadingOverlay({ 
  message = 'Loading...' 
}: LoadingOverlayProps) {
  return (
    <div className="loading-overlay">
      <div className="loading-overlay-backdrop" />
      <div className="loading-overlay-content">
        <Flex direction="column" align="center" gap="3">
          <Spinner size="3" />
          {message && (
            <Text size="2" color="gray">
              {message}
            </Text>
          )}
        </Flex>
      </div>
    </div>
  );
}
