function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value;
    }
    return value;
}


function getLength(value: string | unknown[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}


function filterByRating(items: { title: string, rating: number }[]
): { title: string, rating: number }[] {
    for (const item of items) {
        if (item.rating < 0 || item.rating > 5) {
            throw new Error("Invalid rating(must be between 0 and 5)");
        }
    }
    return items.filter(item => item.rating >= 4);
}


function filterActiveUsers(users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
    return users.filter(user => user.isActive);
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}


function getUniqueValues(
    array1: (number | string)[],
    array2: (number | string)[]
): (number | string)[] {

    const uniqueValue: (number | string)[] = [];
    function addUnique(value: number | string) {
        for (let i = 0; i < uniqueValue.length; i++) {
            if (uniqueValue[i] === value) {
                return;
            }
        }
        uniqueValue[uniqueValue.length] = value;
    }

    for (let i = 0; i < array1.length; i++) {
        addUnique(array1[i] as number | string);
    }

    for (let i = 0; i < array2.length; i++) {
        addUnique(array2[i] as number | string);
    }

    return uniqueValue;
}



function calculateTotalPrice(products: { name: string; price: number; quantity: number; discount?: number }[]): number {
    if (products.length === 0) {
        return 0;
    }

    return products.map((product) => {
        const total = product.price * product.quantity;
        if (product.discount != undefined) {
            if (product.discount < 0 || product.discount > 100) {
                throw new Error("Discount must be between 0 and 100");
            }
        }
        const discount = product.discount ? (product.discount / 100) * total : 0;
        return total - discount;
    }).reduce((total, price) => total + price, 0);
}