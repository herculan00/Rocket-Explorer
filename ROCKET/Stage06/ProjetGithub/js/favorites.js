export class Favorietes{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
         this.entries = [
            { 
                login: 'maykbrito',
                name: 'Mayk Brito',
                public_repos: '76',
                followers: '120000'
            } 
        ]
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