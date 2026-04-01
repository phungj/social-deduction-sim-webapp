type PlayerID = string;
type PlayerName = string;
type RoleID = string;
type RoleName = string;
type Alignment = string;
type EventType = string;
type EventResult = boolean;

type Info = {
    eventType: EventType,
    subject: PlayerID,
    value?: RoleID | Alignment
}

type Claim = Info;
type Knowledge = Info;

type PublicEvent = {
    eventType: EventType,
    players: PlayerID[],
    event: Claim | Knowledge
}

type PrivateEvent = {
    eventType: EventType,
    actors: PlayerID[],
    targets: PlayerID[],
    result: EventResult
}

type Player = {
    playerID: PlayerID,
    playerName: PlayerName,
}

type PlayerKnowledge = {
    knowledge: Knowledge[]
}

type ActionContext = {
    self: PlayerID,
    players: Player[],
    playerKnowledge: PlayerKnowledge,
}

type ActionAttempt = {
    target: PlayerID,
    fakeClaim?: RoleID | Alignment
}

type Role = {
    roleName: RoleName,
    roleID: RoleID
    alignment: Alignment,
    action: (players: ActionContext) => ActionAttempt
}

type World = {
    players: Player[]
    roles: Record<PlayerID, RoleID>
    playerKnowledge: Record<PlayerID, PlayerKnowledge>
    publicEvents: PublicEvent[],
    privateEvents: PrivateEvent[]
}