type Item = {
    data: number
}

type Armor = {
    type: "Foo"
    foo: string
} & Item

type Weapon = {
    type: "Bar"
    bar: string
} & Item

type AnyItem = Armor | Weapon

function foobar(arg: AnyItem) {
    if (arg.type == "Foo") {
        console.log(arg.foo)
    } else {
        console.log(arg.bar)
    }
}