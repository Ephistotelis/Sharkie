This game is designed as endless running game. The goal is to achieve the highest score possible! Every score is saved in localstorage and shown on the scoreboard.
Every second you gain 100+ points to your score. 
At the end your score is calculated like this: score over time + (the amount of coins * 500points) + (the amount of kills *300points)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Gamemechanic:
    #Bottles:
            - by collecting bottle your ability´s cooldown is reduced by 5 seconds
    
    #Coins:
            - by collecting coins you gain 500+ poins for your endscore
            - your character_Attackdamge is rising by +3
            - your character gains immortility for 2 seconds
                - while immortal you can still hit enemies but they cant hit you. Means you can kill enemies to get more points without getting damage yourself

    #Enemeies:
            - There are TWO types of normal enemies and ONE type of Endboss
            - in gameprogress different enemies gonna spawn with better health and attackdamage stats       !! scroll down to see all enemy stats!
            - every time you and an enemy collides, both getting damage depends on enemy_AttackDamage
                - if your character is immortal due to collecting a coin, only the enemy is getting damage
                - if the enemy you are colliding with is dead, your character wont take damage anymore

            #Pufferfish
                - there are 3 types of Pufferfishes (easy, medium, hard)

            #Jellyfish 
                - there are 4 types of Jellyfishes (easy, medium, hard, veryhard)

            #Endboss
                - there is only 1 type of endboss with scaling health!

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Controlls :

#Movement

W / ArrowUp         = MoveUp
A / ArrowLeft       = MoveLeft                      !! swimming backwards causes the shark to swim slower!
S / ArrowDown       = MoveDown
D / ArrowRight      = MoveRight

#Actions

SPACE               = Use ability (Bubble Attack)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Stats:

#Charachter:
    -Attack = 10                                    !! +3 for every coin collected
    -Health = 200
        #Spells:
            #Bubble Attack:
                - 200 + character_Attackdamge       !! coins boost the attackdamage of your character permanently, that means Bubble Attack damage is scaling aswell

#Pufferfish:
    #easy:
        -Attack = 2
        -Health = 10
    #medium
        -Attack = 4
        -Health = 20
    #hard
        -Attack = 7
        -Health = 40

#Jellyfish:
    #easy
        -Attack = 8
        -Health = 50
    #medium
        -Attack = 16
        -Health = 100
    #hard
        -Attack = 26
        -Health = 250
    #veryhard
        -Attack = 30
        -Health = 300

#Endboss:
    -Attack = ??
    -Health = ??

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
It is possible to adjust your character, enemies and when which enemies spawn.
In the following section you can see all stats of every unit and where to adjust it.

How to adjust stats: