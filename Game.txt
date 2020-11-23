
Let's make a game!
name:Adventure Clicker
author:Illithid_Ate_Sylgar
created:11/20/2020
updated:11/20/2020
version:0.1

Settings
building cost refund:0%

CSS
  #game
  {
    background:black;
    font-family:"Times New Roman",Times,serif;
    color:white;
  }
  
  #game.filtersOn .thing.cantAfford.notOwned
  {
    filter:blur(3px);
  }
  
Layout
*main
  contains:res, buttons
  *res
    contains:Resources
    header:Inventory
    class:fullWidth
  *buttons
    contains:Buttons
*store
  contains:buildings, upgrades
  *buildings
    contains:BulkDisplay, Buildings
    header:Constructions
    tooltip origin:left
  *upgrades
    contains:Upgrades
    header:Enchantments
    costs:hide
    names:hide
*log
  contains:Log
  no tooltip


Resources
*redemption
  name:Redemption
  desc:The world will be cleansed.
  tooltip origin:right
  (redemption)
  show max
  (redemption:ps)
  hidden when 0
*wood
  name:Wood
  desc:Gathered from the scarse trees surrounding your home.
  (wood)
  show max
  (wood:ps)
  hidden when 0
*narPoint
  always hidden
  
Buttons
*elimin
  name:Eliminate
  no text
  on click:yeild 1 redemption
  hidden
  no tooltip
*progressBtn
  name:next
  desc:Move forward in the story
  hidden
  if (have progressBtn)
    show progressBtn
  on click:
    log 

  
Achievements
*1click
  name:Let it begin...
  desc:Start your purge in story mode.
  req:1 elimin:clicks
