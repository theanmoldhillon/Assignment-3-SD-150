describe("App", () => {
  const clickme = document.querySelector('#click-me')
  const counter = document.querySelector('#counter')
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      clickme.click();
      expect(counter.innerHTML).toEqual('120')
    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(clickme.id).toBe('click-me')
    })
  })

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(5)).toBe(120)
    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(-18)).toBe(1)
    })
  })

  describe("Computer", () => {
    const computer = new Computer();
    it("is created with a hard drive size of 512", () => {
      expect(computer.hardDriveSpace).toBe(512)
    })

    describe("installProgram", () => {
      it("can install a program if there is sufficient space", () => {

      })

      it("will not install the program if there is insufficient space", () => {

      })
    })

    describe("format", () => {
      const computer = new Computer();
      it("resets the hard drive to 512, even after programs have been installed", () => {
        expect(computer.hardDriveSpace).toBe(512)
      });
    })

  })

})