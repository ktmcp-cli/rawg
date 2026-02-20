![Banner](https://raw.githubusercontent.com/ktmcp-cli/rawg/main/banner.svg)

> "Six months ago, everyone was talking about MCPs. And I was like, screw MCPs. Every MCP would be better as a CLI."
>
> — [Peter Steinberger](https://twitter.com/steipete), Founder of OpenClaw
> [Watch on YouTube (~2:39:00)](https://www.youtube.com/@lexfridman) | [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/)

# RAWG Video Games Database CLI

> **⚠️ Unofficial CLI** - Not officially sponsored or affiliated with RAWG Video Games Database.

350,000+ games database API

## Installation

```bash
npm install -g @ktmcp-cli/rawg
```

## Quick Start

```bash
# Configure API key
rawg config set --api-key YOUR_API_KEY

# Show configuration
rawg config show
```

## Commands

### Config

```bash
rawg config set --api-key <key>
rawg config show
```

## JSON Output

All commands support `--json` for structured output:

```bash
rawg <command> --json | jq
```

## Why CLI > MCP?

No server to run. No protocol overhead. Just install and go.

- **Simpler** — Just a binary you call directly
- **Composable** — Pipe to `jq`, `grep`, `awk`
- **Scriptable** — Works in cron jobs, CI/CD, shell scripts

## License

MIT — Part of the [Kill The MCP](https://killthemcp.com) project.
