var employee = {
    id: 1,
    greet: function() {
        setTimeout(() => {
            console.log(this)
            console.log(this.id)
        }, 1000)
    }
}
