export default `
type Reactor implements SystemInterface{
  id: ID
  simulatorId: ID
  type: String
  name: String
  displayName: String
  stealthFactor: Float
  power: Power
  heat: Float
  heatRate: Float
  coolant: Float
  damage: Damage
  #One of 'reactor' or 'battery'
  model: REACTOR_MODELS
  ejected: Boolean
  externalPower: Boolean
  powerOutput: Int
  efficiency: Float
  batteryChargeLevel: Float
  batteryChargeRate: Float

  # For Dilithium Stress
  alphaLevel: Float
  betaLevel: Float
  alphaTarget: Float
  betaTarget: Float

  locations: [Room]
}

enum REACTOR_MODELS {
  reactor
  battery
}
`;
