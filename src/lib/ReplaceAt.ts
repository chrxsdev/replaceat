interface CleanProps {
  newStr: string;
  newReplace: string;
}

export class ReplaceAt {
  constructor() {}

  /**
   * Replaces a character at a specific index in a string with a given replace.
   *
   * @param {string} str - The original string.
   * @param {number} index - The index at which to replace the character.
   * @param {string} replace - The string to insert at the specified index.
   * @returns {string} - The modified string with the replace applied.
   * @throws {Error} - Throws an error if the index is out of range.
   */
  static replaceAt(str: string, index: number, replace: string): string {
    const { newStr, newReplace } = this.validParams(str, index, replace);
    return `${newStr.substring(0, index)}${newReplace}${newStr.substring(index + 1)}`;
  }

  /**
   * Replaces a character at a specific index in a string with a given replace and remove all heading characters.
   *
   * @param {string} str - The original string.
   * @param {number} index - The index at which to replace the character.
   * @param {string} replace - The string to insert at the specified index.
   * @returns {string} - The modified string with trucated characters before index.
   * @throws {Error} - Throws an error if the index is out of range.
   */
  static replaceAtTruncateBeforeIndex(str: string, index: number, replace: string): string {
    const { newStr, newReplace } = this.validParams(str, index, replace);
    return `${newReplace}${newStr.substring(index + 1)}`;
  }

  /**
   * Replaces a character at a specific index in a string with a given replace and remove all trailing characters.
   *
   * @param {string} str - The original string.
   * @param {number} index - The index at which to replace the character.
   * @param {string} replace - The string to insert at the specified index.
   * @returns {string} - The modified string with trucated characters after index.
   * @throws {Error} - Throws an error if the index is out of range.
   */
  static replaceAtTruncateAfterIndex(str: string, index: number, replace: string): string {
    const { newStr, newReplace } = this.validParams(str, index, replace);
    return `${newStr.substring(0, index)}${newReplace}`;
  }

  /**
   * Validation to ensure that index is in range with no leading or trailing spaces.
   * @param {string} str - The original string.
   * @param {number} index - The index at which to replace the character.
   * @param {string} replace - The string to insert at the specified index.
   * @returns {string} - The original string and the replace with no leading or trailing spaces.
   * @throws {Error} - Throws an error if the index is out of range.
   */
  private static validParams(str: string, index: number, replace: string): CleanProps {
    if (!(index in Array.from(str))) {
      throw new Error(`<<${index}>> index argument is out of <<${str}>> range.`);
    }

    return { newStr: str.trim(), newReplace: replace.trim() };
  }
}
