async function gitHubProjects(){
    
    const projetos = document.getElementById("proj");

    try{
        const response = await fetch(`https://api.github.com/users/DevMoitinho/repos?sort=updated&per_page=100`);
        const repos = await response.json();
        repos.forEach(repo =>{
            if(!repo.fork){
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project-card';
                projectDiv.innerHTML = `
                <a href="https://github.com/DevMoitinho/${repo.name}">
                    <div class="prj">
                        <h2>${repo.name}</h2>
                        <p>${repo.description || 'Sem descrição'}</p>
                    </div>
                </a>
                `;
                projetos.append(projectDiv);
            }
        });
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
    }
}

// Chame a função quando a página carregar
document.addEventListener('DOMContentLoaded', gitHubProjects);
