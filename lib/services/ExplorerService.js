

class ExplorerService{
  
    static filterByMission(explorers, mission){
        return explorers.filter(explorer => explorer.mission === mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return explorers.reduce((total, explorer) => total += explorer.mission === mission? 1: 0 , 0);
    }

    static getExplorersUsernamesByMission(explorers, mission){
        return ExplorerService.filterByMission(explorers, mission).map(explorer => explorer.githubUsername);
    }

}

module.exports = ExplorerService;
