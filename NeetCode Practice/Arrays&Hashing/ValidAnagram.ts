class ValidAnagram {
  constructor() {}

  usingSort(s: string, t: string): boolean {
    const sArr = s.split("");
    const tArr = t.split("");
    sArr.sort();
    tArr.sort();
    return sArr.join("") === tArr.join("");
  }

  usingMap(s: string, t: string): boolean {
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
      if (sMap.has(s[i])) {
        sMap.set(s[i], sMap.get(s[i]) + 1);
      } else {
        sMap.set(s[i], 1);
      }
    }
    for (let i = 0; i < t.length; i++) {
      if (tMap.has(t[i])) {
        tMap.set(t[i], tMap.get(t[i]) + 1);
      } else {
        tMap.set(t[i], 1);
      }
    }
    if (sMap.size !== tMap.size) {
      return false;
    }
    for (let [key, value] of sMap) {
      if (tMap.get(key) !== value) {
        return false;
      }
    }
    return true;
  }

  usingArray(s: string, t: string): boolean {
    const sArr = new Array(26).fill(0);
    const tArr = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      sArr[s.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < t.length; i++) {
      tArr[t.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
      if (sArr[i] !== tArr[i]) {
        return false;
      }
    }
    return true;
  }
}
