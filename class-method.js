class Instructor {
  name;
  designation = "Web developer";
  job = "Coding";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startWebClass(time) {
    console.log(`Start the class at ${time}pm`);
  }
  classTitle(Module) {
    console.log(`Todays class title: ${Module}`);
  }
}
const momenul = new Instructor("Momenul Islam", "Rajshahi");
console.log(momenul);
momenul.startWebClass("9:00");
momenul.classTitle("Class & Method");
