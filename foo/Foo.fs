module Foo

// Fable will automatically turn this into a function taking 2 arguments
let add x y = x + y

let twice (x : string) = x + x

// A JavaScript array maps to a ResizeArray in Fable
let map (xs : ResizeArray<_>) f =
  xs
  |> Seq.map f
  |> ResizeArray<_>

// The gymnastics with an interface here are to allow pure JavaScript objects to be passed to the function
type IFooBar =
  abstract foo : int with get, set
  abstract bar : int with get, set

let fooBar (x : IFooBar) =
  x.foo * x.bar
