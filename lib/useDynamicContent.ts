
/**
 * Deprecated: The website now uses hardcoded content for better performance and decentralization.
 */
export const useDynamicContent = <T>(key: string, fallbackData: T) => {
  return { data: fallbackData, loading: false, error: null };
};
