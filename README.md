# sonar-sample-frontend

A minimal **Next.js (App Router, TypeScript)** app used to validate the
**SonarQube Cloud** end-to-end integration on a small repo — small enough to
stay well under the free-trial 50K line-of-code limit.

> Status: SonarQube Cloud E2E integration verified — analysis runs on the
> `master` branch on each push and results appear on the dashboard.

It contains a little real logic and **one intentional code smell**
(`lib/utils.ts` uses `==` instead of `===`) so that a successful analysis
produces at least one visible issue on the SonarQube dashboard — proving the
wiring works.

## Run locally

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## SonarQube Cloud setup (do these once)

1. **Create the project on SonarQube Cloud**
   - Go to https://sonarcloud.io → your `broadvision` organization → **Analyze new project**
   - Import this repo (or create it manually) and note the **Organization key**
     and **Project key** it assigns.

2. **Match the keys in `sonar-project.properties`**
   - Ensure `sonar.organization` and `sonar.projectKey` here match exactly what
     SonarCloud shows.

3. **Choose CI-based analysis (NOT Automatic Analysis)**
   - Project → **Administration → Analysis Method**
   - Turn **OFF** "Automatic Analysis". Leave only **CI-based analysis** on.
     (If both are on, CI reports are rejected and the dashboard stays empty even
     though the GitHub Action goes green.)

4. **Add the token as a GitHub secret**
   - SonarCloud → **My Account → Security** → generate a token.
   - GitHub repo → **Settings → Secrets and variables → Actions → New repository
     secret** → name it `SONAR_TOKEN`.

5. **Push to `main` (or open a PR)**
   - The `.github/workflows/sonar.yml` workflow runs the scan and uploads results.
   - Check **Administration → Background Tasks** on SonarCloud if the dashboard
     doesn't update — a failed background task there tells you the real reason.

## Expected result

After the first successful analysis, the SonarQube dashboard for this project
should show the `main` branch analyzed, with **at least one issue** raised on
`lib/utils.ts` (the intentional `==` smell). That confirms the E2E path:

```
push → GitHub Action → SonarScanner upload → SonarCloud processing → dashboard results
```
