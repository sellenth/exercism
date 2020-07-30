export type Planet =
  | "Neptune"
  | "Uranus"
  | "Saturn"
  | "Jupiter"
  | "Mars"
  | "Venus"
  | "Mercury"
  | "Earth";

class SpaceAge {
  private earthYearInSeconds = 31557600;

  private orbitalPeriodInEarthYears: Record<Planet, number> = {
    Neptune: 164.79132,
    Uranus: 84.016846,
    Saturn: 29.447498,
    Jupiter: 11.862615,
    Mars: 1.8808158,
    Venus: 0.61519726,
    Mercury: 0.2408467,
    Earth: 1,
  };

  constructor(public seconds: number) {}

  private floatFormatted(input: number): number {
    return parseFloat(input.toFixed(2));
  }

  private ageOnPlanet(planet: Planet): number {
    return this.floatFormatted(
      this.seconds /
        (this.earthYearInSeconds * this.orbitalPeriodInEarthYears[planet])
    );
  }

  onNeptune(): number {
    return this.ageOnPlanet("Neptune");
  }
  onUranus(): number {
    return this.ageOnPlanet("Uranus");
  }
  onSaturn(): number {
    return this.ageOnPlanet("Saturn");
  }
  onJupiter(): number {
    return this.ageOnPlanet("Jupiter");
  }
  onMars(): number {
    return this.ageOnPlanet("Mars");
  }
  onVenus(): number {
    return this.ageOnPlanet("Venus");
  }
  onMercury(): number {
    return this.ageOnPlanet("Mercury");
  }
  onEarth(): number {
    return this.ageOnPlanet("Earth");
  }
}

export default SpaceAge;
