export class Utils {
  /**
   * Filter array by string
   */
  public static filterArrayByString<T>(mainArr: T[], searchText: string): T[] {
    if (searchText === '') {
      return mainArr;
    }

    searchText = searchText.toLowerCase();

    return mainArr.filter((itemObj: T) => {
      return this.searchInObj(itemObj, searchText);
    });
  }

  /**
   * Search in object
   */
  // TODO: MVV: remove any
  public static searchInObj(itemObj: any, searchText: string): boolean {
    for (const prop in itemObj) {
      if (!itemObj.hasOwnProperty(prop)) {
        continue;
      }

      const value = itemObj[prop];

      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      } else if (Array.isArray(value)) {
        if (this.searchInArray(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Search in array
   */
  public static searchInArray<T>(arr: T[], searchText: string): boolean {
    for (const value of arr) {
      if (typeof value === 'string') {
        if (this.searchInString(value, searchText)) {
          return true;
        }
      }

      if (typeof value === 'object') {
        if (this.searchInObj(value, searchText)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Search in string
   */
  public static searchInString(value: string, searchText: string): boolean {
    return value.toLowerCase().includes(searchText);
  }

  /**
   * Generate a unique GUID
   */
  public static generateGUID(): string {
    function S4(): string {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return S4() + S4();
  }

  /**
   * Toggle in array
   */
  public static toggleInArray<T>(item: T, array: T[]): void {
    if (array.indexOf(item) === -1) {
      array.push(item);
    } else {
      array.splice(array.indexOf(item), 1);
    }
  }

  /**
   * Handleize
   */
  public static handleize(text: string): string {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }
}
