"use server"

let toggle: boolean = false;

export async function setToggle(value: boolean) {
    console.log(toggle, value)
  toggle = value;
}

export async function getToggle() {
  return toggle;
}
