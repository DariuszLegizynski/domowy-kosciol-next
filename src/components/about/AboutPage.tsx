import BaseImage from "../base/BaseImage"

const AboutPage = () => {
	return (
		<article className="fadeInFromBottom mt-16 px-4 pb-4 grid gap-y-2 max-w-[1024px]">
			<section>
				<BaseImage
					imgPath="/images/about/ioann-mark-kuznietsov-9QTQFihyles-unsplash.jpg"
					imgAlt="man and woman holding hands together with boy and girl looking at green trees during day"
					height={400}
					width={600}
					author="Ioann Mark Kuznietsov"
				/>
				<div className="grid gap-y-2">
					<div className="text-primary text-[2.6rem] leading-[3rem] pb-2">Domowy Kosciól w Austrii</div>
					<p>
						Ruch Domowy Kosciół w Austrii przy Polskiej Misji Katolickiej Księży Zmartwychwstanców w Wiedniu gromadzi rodziny, które pragną by ich dom stawał
						się "małym Kościołem".
					</p>
					<p>
						Już od piętnastu lat rodziny, których pragnieniem jest bycie bliżej Boga i ludzi we wspólnocie kościelnej, spotykaję się raz w miesiącu w grupach po
						cztery do sześciu małżeństw.
					</p>
					<p>Obecnie istnieje pięć takich grup - kręgów. W spotkaniu kręgu uczestniczy także kapłan-opiekun tzw. doradca duchowy.</p>
				</div>
			</section>

			<section>
				<BaseImage
					imgPath="/images/about/isabella-fischer-asEF6J0LZ44-unsplash.jpg"
					imgAlt="silhouette of woman holding rosary while praying"
					height={400}
					width={600}
					author="Isabella Fischer"
				/>
				<div className="grid gap-y-2">
					<p>
						Dla lepszego wzrostu duchowego i miłości małżeńskiej, a także pogłębiania więzi braterskiej między małżeństwami, organizowane są dwa razy w roku
						weekendowe rekolekcje, które najczęściej prowadzi kapłan i para małżeńska przyjeżdżający z Polski.
					</p>
					<p>
						Dwa dni wspólnego przebywania ze sobą, wspólnych modlitw i rozmów dają szansę wielu małżenstwom do zastanowienia się nad własnymi problemami i
						umiejętnym rozwiązywaniem ich przy Bożej pomocy płynącej z Łask Sakramentu Małżeństwa.
					</p>
				</div>
			</section>

			<section>
				<BaseImage
					imgPath="/images/about/daiga-ellaby-3beArYu-mUo-unsplash.jpg"
					imgAlt="family camping near body of water during daytime"
					height={400}
					width={600}
					author="Daiga Ellaby"
				/>
				<div className="grid gap-y-2">
					<p>
						Rodziny Ruchu "Domowy Kosciól" spotykają się również ze sobą towarzysko. W okresie karnawału jest to czas wspólnego, rodzinnego śpiewania kolęd,
						czas wspólnej, bezalkoholowej zabawy tanecznej, a także gdy jest już cieplej picknikiem na swieżym powietrzu czy innymi ciekawymi wycieczkami.
					</p>
					<p>
						Domowy Kościól w Austrii jest gałęzią rodzinną Ruchu Światło Życie, który ma swój początek w Polsce. A dzięki osobom emigrującym ma możliwośc
						rozwijania się na świecie.
					</p>
				</div>
			</section>
		</article>
	)
}

export default AboutPage
