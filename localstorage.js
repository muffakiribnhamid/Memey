export function addToLocalStorage(key, value) {
    // Retrieve existing items from localStorage, or create a new Set if none exist
    let existingSet = JSON.parse(localStorage.getItem(key)) || [];

    // Convert existing items to a Set for uniqueness
    existingSet = new Set(existingSet);

    // Add the new value to the Set
    existingSet.add(value);

    // Convert the Set back to an array and save it to localStorage
    localStorage.setItem(key, JSON.stringify(Array.from(existingSet)));

    console.log(existingSet);
    console.log('added to local storage');
}