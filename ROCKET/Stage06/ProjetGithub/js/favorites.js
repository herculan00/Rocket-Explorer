export class GithubUser{
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint).then(data => data.json())
                              .then(data => ({
                                login: data.login,
                                name: data.name,
                                public_repos: data.public_repos,
                                followers: data.followers
                              }))
    }
}


export class Favorietes{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
         this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []
        
    }

    delete(user){
        const filteredEntries = this.entries.filter( entry => {
            return entry.login !== user.login
        })

        this.entries = filteredEntries
    }
}


export class FavoriesView extends Favorietes{
    constructor(root){
        super(root)

        this.tbody= this.root.querySelector('table tbody')

        this.update()
    }

    update(){
        this.removeAllTr()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `
            https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm("Tem a certeza que quer remover esta linha?")

                if(isOk){
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })


    }

    createRow(){

        const tr = document.createElement('tr')

        const content = `       
                <td class="user">
                    <img src="http://github.com/maykbrito.png" alt="Imagem de Mike Brito">
                    <a href="http://github.com/maykbrito">
                        <p>Mike brito</p>
                        <span>maykbrito</span>
                    </a>
                </td>
                <td class="repositories">76</td>
                <td class="followers">47</td>
                <td>
                    <button class="remove">&times;</button>
                </td>    
        `

        tr.innerHTML=content

        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        });
    }
}