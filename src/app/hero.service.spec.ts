import { HeroService } from "./hero.service";
import { TestBed, async } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { Hero } from "./hero";
import { of, from } from "rxjs";

class MockMessagesService extends MessageService {
  add(message: string) {}
  clear() {}
}

describe("HeroService", () => {
  let serviceInstance: HeroService;
  let httpClient: HttpClient;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        { provide: MessageService, useClass: MockMessagesService }
      ]
    }).compileComponents();

    serviceInstance = TestBed.get(HeroService);
    httpClient = TestBed.get(HttpClient);
  });

  it("creates a new instance successfully", () => {
    expect(serviceInstance).toBeTruthy();
    expect(httpClient).toBeTruthy();
  });

  describe("getHero", () => {
    let mockHero;

    beforeEach(() => {
      mockHero = new Hero();
      mockHero.id = 99;
      mockHero.name = "Spartacus";
    });

    it("makes the expected GET call", async(() => {
      // Fancy code for telling Jasmine what to return from
      // the mock HTTP client when we call "getHero"
      const httpSpy = spyOn(httpClient, "get").and.returnValue(of(mockHero));
      // This is the actual running of the test - which fires the spy above
      serviceInstance.getHero(99).subscribe(data => {
        // This "subscribe" pattern is not perfect - we should be accessing the
        // "current value" of the "getHero" observable that is returned instead
        expect(httpSpy).toHaveBeenCalledTimes(1);
        // console.debug({ data });
      });
    }));
  });
});
