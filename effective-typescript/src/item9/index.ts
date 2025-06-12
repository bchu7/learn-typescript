namespace Item9 {
    interface Person { name: string };

    // type annotation: Person
    const alice: Person = { name: 'Alice' };

    // type assertion: as Person
    const bob = { name: 'Bob' } as Person;
    // is equivalent to {} as Person. It is less common now because <Person> is interpreted as a start tag in .tsx files (TypeScript + React).
    const jan = <Person>{ name: 'Jan' };

    // type assertion
    const peopleAsssertion = ['alice', 'bob', 'jan'].map(name => ({ name } as Person));

    // use type annotation
    const peopleVerbose = ['alice', 'bob', 'jan'].map(name => {
        const person: Person = { name };
        return person
    });

    // annotate the return type
    const people = ['alice', 'bob', 'jan'].map((name): Person => ({ name }));
    // annotate desired type and let TypeScript check the validity of the assignment
    const peopleAlsoOK: Person[] = ['alice', 'bob', 'jan'].map(name => ({name}));

    /**
     * Type assertions make the most sense when you truly do know more about a type than TypeScript does,
     */
    
    let bb = 'aaa' as const;

    // a? --> optional chaning
    // name! --> Non-null assertion
    let a: Person | null = {name: 'Jan'} as Person;
    const b = a?.name!.toString();

    // output: Jan
    // output: undefined, in case a is undefined or null
    console.log(b)
    

}