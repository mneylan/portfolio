const scrollLinks = document.querySelectorAll("[data-type]")
const header = document.getElementById('header')
const projects = document.getElementById('projects')

let locations = [projects, header, projects]
  
let i = 0

while (i < locations.length) {
  
  ((i) => {
    scrollLinks[i].addEventListener('click', () => {
      locations[i].scrollIntoView()
    })
    
  })(i)

  i++
}




  
  


