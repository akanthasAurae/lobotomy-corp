---
cssclasses: no-article-title
title: stuff
---

<h2 class="default">nothing there</h2>

Nothing There has 1000 HP and fast attack speed (5 actions) in the first phase. When turning into a cocoon, it will fully recover its HP. If this form is not subdued in 30s it will fully recover its HP again and will transform into its final form. In its third form, Nothing There's HP increases to 1500 and its attack speed becomes normal (4 actions). If it takes less than X damage in a turn, it heals 170 HP at the end of the turn. IF its HP is below 30%, it will instead heal 330 HP at turn end.

In first form it takes 3 clash wins to stagger. it cant stagger in second form. in third form it takes 5 clash wins to stagger

<h2 class="default has-subtitle">First Form Passives & Skills</h2>

> [!default|subtitle]
> > [!content]
> > <span class="icon warn2">Evolving</span>
> ><code>- After 3 turns, morph into second form at the start of the next turn</code>
> >
> ><span class="icon warn3">Shell</span>
> ><code>- Turn Start: If there's an Employee with 30% or less HP, use 'Wear Shell' on them</code>
> ><span class="icon warn3">Worn Shell</span>
> ><code>- Nothing There will take on the form of the Employee it killed through 'Wear Shell' and it will then replace its existing Skills with new ones</code>
> ><code>- After using up both of the Skills, the Shell will be broken down and Nothing There will emerge (this does not reset the timer to evolve)</code>
> ><code>- If there are no other Employees or Clerks in sight, It will mimic the employee's usual behaviour and the way they talk, sometimes even mimicking their likes and dislikes, as well as every other visible trait.</code>


> [!warn2] Dense Flesh
> It reaches and claws with its pale hand
> <code> Atk Weight ⯀</code>
><code>- 18~21 <span class="icon red">RED</span> damage</code>
><code>- Inflicts 1 <span class="icon warn3">Terror</span></code>
><code>- Turn Start: If an Employee has 3+ <span class="icon warn3">Terror</span>, raise their <span class="icon overwhelmi">Fear Level</span> by 1 and remove 3 <span class="icon warn1">Actions</span> from them in that Turn</code>  

> [!warn3] Wear Shell
> It claws and rips flesh, instantly killing the weakened employee and 'copying' them
><code> Atk Weight ⯀</code>
><code>- <span class="icon clash">Clash Power</span> +5</code>
><code>- FATAL <span class="icon red">RED</span> damage</code>
><code>- Instantly kill the target and copy the resistances and skills of the victim, then activate the 'Worn Shell' passive</code>
><code>- If the <span class="icon clash">clash</span> is lost, Nothing There becomes <span class="icon warn2">Staggered</span></code>

> [!warn3] Eye Contact (Worn Shell)
> A blade made out of flesh and bone bursts from the shell's arm, impaling the target through the chest and lifting them up. Then they are thrown on the ground in order to pull the blade out, dealing additional damage.
><code> Atk Weight ⯀</code>
><code>- <span class="icon clash">Clash Power</span> +10</code> if target failed a <span class="icon prud">Prudence</span> check</code>
><code>- 80~120 <span class="icon red">RED</span> damage</code>
><code>- Applies a bleeding effect that deals 8 <span class="icon red">RED</span> damage every 10s for 30s</code>
><code>- If the target took 40+ <span class="icon red">RED</span> damage, set their <span class="icon overwhelmi">Fear Level</span> to <span class="icon terrify">Terrified</span></code>
><code>- Inflict 2 <span class="icon warn3">Terror</span></code>

> [!warn3] Reaching Hand (Worn Shell)
> The shell sprints toward the furthest employee while its arm morphs into a fleshy blade, leaping into an overhead slash that slams down on them.
><code> Atk Weight ⯀</code>
><code>- Target Fixed </code>
><code>- This attack acts before any other units</code>
><code>- 26~48 <span class="icon red">RED</span> damage</code>
><code>- Inflict 1 <span class="icon warn3">Terror</span></code>

<h2 class="default has-subtitle">Second Form Passives & Skills</h2>

> [!default|subtitle]
> > [!content]
> > <span class="icon warn2">Still Evolving</span>
> ><code>- After 3 turns, evolve into the third form. The <span class="icon hp">HP</span> of the third form depends on the amount of <span class="icon hp">HP</span> this current form has left at the moment of evolution. (Min. 60% of Max. HP)</code>
> ><code>- Striking the Eyes causes it to take +100% damage from an attack, however the employee must pass a <span class="icon temp">Temperance</span> check in order to strike correctly</code>
> >
> ><span class="icon warn3">Regenerative</span>
> ><code>- Turn Start: recover 10% of Max. <span class="icon hp">HP</span></code>

> [!warn1] Hard Cocoon
> The muscle fibers forming the cocoon tighten
><code> Atk Weight ⯀</code>
><code> <span class="icon clash">Clashable Guard</span></code>
><code>- Clash Win: recover 50 <span class="icon hpregen">HP</span> and cancel 1 <span class="icon warn1">Action</span> from the attacker</code>

<h2 class="default has-subtitle">Third Passives & Skills</h2>

> [!default|subtitle]
> > [!content]
> > <span class="icon warn2">Fully Evolved</span>
> ><code>- If Nothing There took 100 or less damage within a Turn, it will heal 170 <span class="icon hpregen">HP</span> at the end of said Turn</code>
> ><code>- If Nothing There's <span class="icon hp">HP</span> is below 30%, heal 330 <span class="icon hpregen">HP</span> instead</code>
> >
> ><span class="icon warn3">Mimic</span>
> ><code>- Nothing There will focus on a random Agent, targeting them until they're either <span class="icon dead">dead</span> or outside of the room it is in. Employees with higher <span class="icon spd">speed</span> can intercept attacks focused on that Agent by <span class="icon clash">Clashing</span></code>
> ><code>- Turn Start: If the focused Employee is outside of melee range, Nothing There will use 'hëLLò?' while attempting to close the distance.</code>

> [!warn1] Follow
> It forms a mace-like arm, slamming it down.
><code> Atk Weight ⯀</code>
><code>- 25~35 <span class="icon red">RED</span> damage</code>
><code>- Inflict 1 <span class="icon warn3">Terror</span></code>
><code>- Gain 2 <span class="icon warn2">Imitation</span></code>

> [!warn2] Imitation (Counter)
> It will attempt to mimic the skill it was struck by
><code> Atk Weight ⯀</code>
><code>- This skill's damage values will mimic the last skill that struck this unit</code>
><code>- Clash Win: Gain 2 <span class="icon warn2">Imitation</span></code>
><code>- ??~?? <span class="icon red">RED</span> damage</code>
><code>- Inflict 1 <span class="icon warn3">Terror</span></code>
><code>- Gain 3 <span class="icon warn2">Imitation</span></code>
><code>- If this unit is struck by a Skill it has already seen, evolve this Skill into a <span class="icon clash">Clashable Counter</span> and gain +5 <span class="icon clash">Clash Power</span></code>


> [!warn2] hëLLò?
> It crouches on one knee, extending an arm as it spreads its hand to reveal the mouth on its palm. After a moment, it shoots a bone shard out of that mouth which pierces through all targets in the way
><code> Atk Weight ⯀⯀⯀⯀⯀</code>
><code>- Target Fixed</code>
><code>- 50~60 <span class="icon red">RED</span> damage</code>
><code>- Sub-targets take -50% <span class="icon weap">damage</span> and 1 <span class="icon warn3">Terror</span> instead</code>
><code>- Inflict 2 <span class="icon warn3">Terror</span></code>
><code>- <span class="icon warn2">Unbreakable</span></code>

> [!warn3] GôDdBỹÉ
> It morphs its arm into a wide blade and proceeds to cut targets in front of it into a fine red mist
><code> Atk Weight ⯀</code>
><code>- Spend 10 <span class="icon warn2">Imitation</span> to gain +10 <span class="icon clash">Clash Power</span></code>
><code>- 300 <span class="icon red">RED</span> damage</code>
><code>- Applies a bleeding effect that deals 10 <span class="icon red">RED</span> damage every 10s for 30s</code>